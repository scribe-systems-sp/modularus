export abstract class SApi {
    abstract getApiIdentifier(): String;
    abstract async isLoaded(): Promise<boolean>;
    abstract async loadApi(baseURL: string): Promise<void>;
    abstract async api(): Promise<any>;
    async getClient(baseURL: string): Promise<any> {
        let apiLoaded = await this.isLoaded();
        if(!apiLoaded) {
            await this.loadApi(baseURL)
        }
        return await this.api();
    }
}