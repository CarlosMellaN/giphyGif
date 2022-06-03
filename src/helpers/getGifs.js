

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Up42wfDc46Kk1kta0m3dMahO5eILV1w8`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
    //console.log(gifs);
    //setImages( gifs );
}