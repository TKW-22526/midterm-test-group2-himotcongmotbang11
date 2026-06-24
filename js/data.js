const Products=[


{
    masp :"SP001",
    tensp:"iphone 15 Pro",
    giasp:"3000000",
    mota:"điện thoại cao cấp của apple",
    mausac:[
        {mamau:"black",tenmau:"đen"},
        {mamau:"bule",tenmau:"xanh biển"}
    ]
},
{
 masp :"SP001",
    tensp:"iphone 15 Pro",
    giasp:"3000000",
    mota:"điện thoại cao cấp của apple",
    mausac:[
        {mamau:"black",tenmau:"đen"},
        {mamau:"bule",tenmau:"xanh biển"}
    ]
}
]
functioncreateltem(obj)
    
    const litsProducts=document.getElementById("Productlist");
    const item =document.createElement("div");

    
    const containerlmage =document.createElement("div");
    containerlmage.setAttribute("class","image");
    const img= document.createElement("img");
    img.setAttribute("src","../images/iphone-17.jpg");

    containerlmage.appendChild(img);
    const containerLfo =document.createElement("div")
    containerLfo.setAttribute("class","Lfo card-body");

      const masp =document.createElement("p")
      masp.innerHTML=obj.masp;
       const tensp =document.createElement("p")
      masp.innerHTML=obj.tensp;
       const giasp =document.createElement("p")
      masp.innerHTML=obj.giasp; 
      const mota =document.createElement("p")
      masp.innerHTML=obj.mota;
       const mausac =document.createElement("p")
      masp.innerHTML=obj.mausac;

      containerLfo.appendChild(masp);
       containerLfo.appendChild(tensp); 
       containerLfo.appendChild(mota);
        containerLfo.appendChild(mausac);
        item.appendChild(containerLfo);
        litsProducts.appendChild(item);
        function loadAllProducts(objAray){

            for (let i=0;i<oblArray.lenght;i++){
                createItem(objArray[i]);
            }
        }