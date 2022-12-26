import {Component} from "@angular/core";

@Component({
  selector: `app-book`,
  templateUrl:`./book.component.html`,
  styleUrls:['book.component.css'],
})
export class BookComponent{
  product:any=[
    {id:1, images:'assets/images/anime 1.png',buying:'mua', book:'GHOST IN SHELL', price:'30000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:2, images:'assets/images/anime 2.png',buying:'mua', book:'AKIRA ', price:'40000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:3, images:'assets/images/anime3.png',buying:'mua', book:' PERFECT BLUE', price:'35000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:4, images:'assets/images/nime 4.png',buying:'mua', book:' METROPOLIS', price:'50000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:5, images:'assets/images/anime 5.png',buying:'mua', book:' GRAVE OF FIREFLIES', price:'50000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:6, images:'assets/images/anime 6.png',buying:'mua', book:'VAMPIREHUNTERD', price:'30000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:7, images:'assets/images/anime 7.png',buying:'mua', book:'DEATH NOTE', price:'55000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:8, images:'assets/images/anime 8.png',buying:'mua', book:'COWBOY BEBOP', price:'50000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},
    {id:9, images:'assets/images/anime 9.png',buying:'mua', book:'.YOUR NAME', price:'40000 VNĐ', introduce:'Đây là một trong những  cuốn sách được ưa thích nhiều nhất và chiếm đợc trái tym người đọc qua tình huống truyện hấp dẫn , đây kịch tính',},

  ]
}
