export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly HTML = new Tag('HTML', 'blue'); 
    static readonly REACT = new Tag('React', 'green');
    static readonly NODEJS = new Tag('Node.JS', 'purple');
    static readonly CSS = new Tag('CSS', 'pink');
    static readonly MONGODB = new Tag('MONGODB', 'blue');
    static readonly MYSQL = new Tag('MYSQL', 'darkblue');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}
