export abstract class SApi {
    abstract getApiIdentifier(): String;
    abstract async isLoaded(): Promise<boolean>;
    abstract async loadApi(baseURL: string): Promise<void>;
    abstract async api(): Promise<any>;
    async ensureLoaded(baseURL: string) {
        const apiLoaded = await this.isLoaded();
        if(!apiLoaded) {
            await this.loadApi(baseURL)
        }
    }
    async getClient(baseURL: string): Promise<any> {
        await this.ensureLoaded(baseURL)
        return await this.api()
    }
}