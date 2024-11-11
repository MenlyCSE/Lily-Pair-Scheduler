let cachedData = null;
async function fetchSheetData() {
    const sheetID = `AKfycbwUDAAIYTwGhtEh6EgoWce7aAxUFXO35DyUorX_4yG2kZzlO-CzxUBx8op50mKIBpo`;
    const webAppURL = `https://script.google.com/macros/s/${sheetID}/exec`;

    if (cachedData)
        return cachedData;

    try {
        const response = await fetch(webAppURL);
        const data = await response.json();
        cachedData = data;

        return data;

    } catch (error) {
        console.log(error);
    }
}

async function dataObject(index) {
    const data = await fetchSheetData();
    const object = {
        name: data[index][0],
        email: data[index][1],
        weChatID: data[index][2],
        type: data[index][3],
        availability: data[index][4],
        timezone: data[index][5],
    }

    return object;
}

export { fetchSheetData, dataObject };