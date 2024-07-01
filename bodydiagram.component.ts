import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-bodydiagram',
  templateUrl: './bodydiagram.component.html',
  styleUrls: ['./bodydiagram.component.scss']
})
export class BodydiagramComponent implements OnInit {
  ArrayListOfImagFront: any[]=[];
  ArrayListOfImagBack: any[]=[];
  hoverFront: any[]= [];
  hoverBack: any[] = [];
  ngOnInit(): void {
    $('.frontBodyClass').on('mouseenter',function() {
      var id = $(this).attr('id');
      self.mouseevent(id,'enter','FrontBody');
    });
    $('.frontBodyClass').on('mouseleave',function() {
      var id = $(this).attr('id');
      self.mouseevent(id,'leave','FrontBody');
    });
    $('.BackBodyClass').on('mouseenter',function() {
      var id = $(this).attr('id');
      self.mouseevent(id,'enter','BackBody');
    });
    $('.BackBodyClass').on('mouseleave',function() {
      var id = $(this).attr('id');
      self.mouseevent(id,'leave','BackBody');
    });
      var self = this;
      $('.frontBodyClass').on('click',function() {
        var id = $(this).attr('id');
        var title = $(this).attr('xlink:title')
        if ($(this).find('path').css('fill-opacity') == '0.5') {
            $(this).find('path').css('fill-opacity', 0);
            self.mainfunction(id,title,'Out','FrontBody');
        }
        else {
            $(this).find('path').css({'fill-opacity': '0.5'});
            self.mainfunction(id,title,'In','FrontBody');
        }
       });
      $('.BackBodyClass').on('click',function() {
        var id = $(this).attr('id');
        var title = $(this).attr('xlink:title')
        if ($(this).find('path').css('fill-opacity') == '0.5') {
            $(this).find('path').css('fill-opacity', 0);
            self.mainfunction(id,title,'Out','BackBody');
        }
        else {
            $(this).find('path').css({'fill-opacity': '0.5'});
            self.mainfunction(id,title,'In','BackBody');
        }
      })
  }


  mainfunction(id,title,string,type){
    if(type =='FrontBody'){
      if(string == 'In'){
        const obj = {
          activeTag:id,
          title:title,
          close:'X',
          col:1
        }
        this.ArrayListOfImagFront.push(obj);
        this.hoverFront.push(obj);
      }else{
        const Index = this.ArrayListOfImagFront.findIndex(x => x.activeTag == id);
        this.ArrayListOfImagFront.splice(Index,1);
      }
    }else{
      if(string == 'In'){
        const obj = {
          activeTag:id,
          title:title,
          close:'X',
          col:2
        }
        this.ArrayListOfImagBack.push(obj);
        this.hoverBack.push(obj);
      }else{
        const Index = this.ArrayListOfImagBack.findIndex(x => x.activeTag == id);
        this.ArrayListOfImagBack.splice(Index,1);
      }
    }
  }

  mouseevent(id,string,type){
    if(type == 'FrontBody'){
      if(string == 'enter'){
     var data = this.hoverFront.find(m=>m.activeTag ==id)
       if(data == undefined){
        $('#'+ id).find('.fill-hover').css({'fill-opacity': '0.4'});
       }
    }
    else if (string == 'leave'){
        var data = this.hoverFront.find(m=>m.activeTag ==id)
        if(data == undefined){
          $('#'+ id).find('.fill-hover').css('fill-opacity', 0);
        }
    }
    }

    if(type == 'BackBody'){
      if(string == 'enter'){
     var data = this.hoverBack.find(n=>n.activeTag ==id)
       if(data == undefined){
        $('#'+ id).find('.fill-hover').css({'fill-opacity': '0.4'});
       }
    }
    else if(string == 'leave'){
      var data = this.hoverBack.find(n=>n.activeTag ==id)
      if(data == undefined){
        $('#'+ id).find('.fill-hover').css('fill-opacity', 0);
      }
    }
  }
}

closeselectedpart(data,type){
  if(type == 'Front'){
    const Index = this.ArrayListOfImagFront.findIndex(x => x.activeTag == data.activeTag);
    this.ArrayListOfImagFront.splice(Index,1);

    if(data.activeTag){
      if($(`#${data.activeTag}`).find('path').css('fill-opacity') == '0.5'){
        $(`#${data.activeTag}`).find('path').css({'fill-opacity': 0});
      }
    }
  }else{
    const Index = this.ArrayListOfImagBack.findIndex(x => x.activeTag == data.activeTag);
    this.ArrayListOfImagBack.splice(Index,1);
    if(data.activeTag){
      if($(`#${data.activeTag}`).find('path').css('fill-opacity') == '0.5'){
        $(`#${data.activeTag}`).find('path').css({'fill-opacity': 0});
      }
    }
  }

}

}
