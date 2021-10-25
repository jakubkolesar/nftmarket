import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent, DragScrollModule } from 'ngx-drag-scroll';

@Component({
  selector: 'topoffers',
  templateUrl: './topoffers.component.html',
  styleUrls: ['./topoffers.component.scss']
})


export class TopoffersComponent  {

  
  constructor() { }

  items=[
    {pic:'trm.png', name:'John Wick', nftphoto:'audi.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'bugatti.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'lamborghini.png', title:'NFT Avatar', price:'17000 $IOI', pricedollars:'$30,500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'audi.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'bugatti.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'lamborghini.png', title:'NFT Avatar', price:'17000 $IOI', pricedollars:'$30,500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'audi.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'bugatti.png', title:'NFT Avatar', price:'1000 $IOI', pricedollars:'$2500', likecount:'41'},
    {pic:'trm.png', name:'John Wick', nftphoto:'lamborghini.png', title:'NFT Avatar', price:'17000 $IOI', pricedollars:'$30,500', likecount:'41'},
  ];

}

