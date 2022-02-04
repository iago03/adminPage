export class itemInfo{
    Name:string;
    ImgUrl:any;
    Price:string;
    Description:string;
    Used:string;

    constructor(name:string, img:any, price:string, desc:string, used:string){
        this.Name = name;
        this.ImgUrl = img;
        this.Price = price;
        this.Description = desc;
        this.Used = used;
    }
}