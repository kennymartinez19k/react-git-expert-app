
export const GetGif = async (category) => {
    const url = `https://g.tenor.com/v1/search?q=${category}&key=LIVDSRZULELA`
    let result = await fetch(url)
    let data = await result.json()
    const gif = data.results.map(x => {
        return {
            media: x.media[0]
        }
    })
    return gif
}