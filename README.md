# playlist-generator
oneclick playlist generator for melon

Function
1. getMelonContentList
    - 검색 쿼리를 인수로 받음 (search)
    - 검색 결과 하나는 songObject{ songId, artist, title, album } 으로 구성되어 있음
    - 검색 결과가 리스트로 반환됨
2. getMelonContentDetail
    - songObject를 인수로 받음
    - songObject의 상세 결과를 반환 (imageUrl, genre)
3. generatePlaylist
    - playlist 생성이 가능한 URL을 반환

> for gift-music/record-music-frontend
