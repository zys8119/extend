const fs = require("fs");
const path = require("path");
//扩展类
class extend {
    constructor(){

    }
    copyFilePath(FilePath) {
        //判断文件是否存在，如果不存在创建对应的文件夹
        FilePath = FilePath || "";
        if(!fs.existsSync(FilePath)){
            FilePath.split(path.sep).map(function (e,i,d) {
                var url = "";
                for(var j = 0 ; j < i;j++){
                    url += d[j]+"\\";
                }
                if(!fs.existsSync(url)){
                    fs.mkdir(url);
                };
            });
        };
        return this;
    }
}
