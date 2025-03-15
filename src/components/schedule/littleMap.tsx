import { styled } from "styled-components";
import { Color } from "../../styles/color";
import SearchIcon from "../../assets/search.svg";
import { useState, useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

export const LittleMap = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [map, setMap] = useState<any>(null);
    const [markers, setMarkers] = useState<any[]>([]);
    const [, setIsKakaoLoaded] = useState(false);

    useEffect(() => {
        if (!window.kakao) {
            const script = document.createElement("script");
            const apiKey = process.env.REACT_APP_MAP_API_KEY;
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = () => {
                console.log("카카오 지도 SDK 로드 성공");
                setIsKakaoLoaded(true);
                initializeMap();
            };
            script.onerror = () => {
                console.error("카카오 지도 SDK 로드 실패");
            };
        } else {
            setIsKakaoLoaded(true);
            initializeMap();
        }
    }, []);

    const initializeMap = () => {
        const container = document.getElementById('kakao-map');
        if (!container) return;

        const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978),
            level: 3,
        };

        const newMap = new window.kakao.maps.Map(container, options);
        setMap(newMap);
    };

    const handleSearch = () => {
        if (searchQuery === "") return;
        const placeSearch = new window.kakao.maps.services.Places();
    
        placeSearch.keywordSearch(searchQuery, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const LatLng = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(LatLng);
    
                markers.forEach((marker) => marker.setMap(null));
                setMarkers([]); 
    
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: LatLng,
                });
    
                setMarkers([marker]);
            } else {
                console.log("검색 결과가 없습니다");
            }
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Wrapper>
            <InputWrapper>
                <input 
                    value={searchQuery} 
                    type="text" 
                    placeholder="장소를 입력해주세요"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <img src={SearchIcon} alt="" onClick={handleSearch} />
            </InputWrapper>
            <Map id="kakao-map" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const InputWrapper = styled.div`
    display: flex;
    height: 40px;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.2);
    &:focus {
        border-color: ${Color.main};
        outline: none;
    }
    justify-content: space-between;
    > input:focus {
        border: none;
        outline: none;
    }

    > input:focus + img {
        border-color: ${Color.main}; 
    }

    &:focus-within {
        border-color: ${Color.main};
    }
    
    > input {
        &::placeholder {
            color: rgba(0,0,0,0.3);
        }
        font-size: 15px;
        border: none;
        outline: none;
        width: 85%;
    }
    > img {
        width: 20px;
        cursor: pointer;
    }
`;

const Map = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
`;
