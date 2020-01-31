/**
 * Principal model
 */
export class Principal {
    public authorities: Principal.Authority[] = [];
    public credentials: Credentials;

    constructor(public authenticated: boolean, authorities: any[], credentials?: any) {
        authorities.map(
            auth => this.authorities.push(new Principal.Authority(auth.authority)));
        this.credentials = credentials;
    }
}

export namespace Principal {

    /**
     * Authority associated with given Principal
     */
    export class Authority {
        constructor(public authority: string) {
        }
    }
}

/**
 * User credentials
 */
export class Credentials {
    constructor(public user: string, public password: string) {
    }
}
