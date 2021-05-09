const flights_uri = 'https://static.bidflyer.com.s3.amazonaws.com/promotional/test.json';

export const getFlights = async () => {
    const response = await fetch(flights_uri);
    if (response.ok) {
        return await response.json();
    }
    console.log(response.error());
    return [];
}
