export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://th.bing.com/th/id/OIP.vDiD2zk4K79uU0xq74nk5gHaET?pid=ImgDet&rs=1') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }