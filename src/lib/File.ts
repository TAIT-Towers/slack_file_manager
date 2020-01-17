import fs = require('fs');
import path = require('path');

class File {
    filepath: string;
    path: object;
    extension: string;
    name: string;
    short_name: string;

    constructor(filepath: string){
        this.filepath = filepath;
        this.path = path.parse(filepath);
        this.extension = ""
        this.name = ""
        this.short_name = ""
    }
}

export = File;