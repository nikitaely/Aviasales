export default class Api {
    baseUrl = 'https://aviasales-test-api.kata.academy';

    constructor() {
        this.searchIdPromise = this.getSearchId(); 
    }

    async getSearchId() {
        const request = await fetch(`${this.baseUrl}/search`);
        if (!request.ok) throw new Error('Error fetching Search ID');
        const data = await request.json();
        console.log('Search ID :', data.searchId);
        return data.searchId;
    }

    async getTickets() {
        const searchId = await this.searchIdPromise; 
        const request = await fetch(`${this.baseUrl}/tickets?searchId=${searchId}`);
        console.log('Response:', request);
        if (!request.ok) throw new Error('Error fetching tickets');
        const data = await request.json();
        return data.tickets;
    }
}
