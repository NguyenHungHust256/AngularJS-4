import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  filterForm='XEM_TAT_CA';
  newEn='';
  newVn='';
  isShowForm=true;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
  constructor() { }

  ngOnInit() {
  }
  addWord(){
    if(this.newEn !== ''||this.newVn!==''){
    this.arrWords.unshift(
      {
        id: this.arrWords.length+1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
      }
    )
  }
    this.newVn='';
    this.newEn='';
    this.isShowForm=false;
  }

  removeWord(id: number) {
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index,1);
  }

  filterWord(memory: boolean){
    const dk1 = (this.filterForm ==='XEM_TAT_CA');
    const dk2 = (this.filterForm==='XEM_CHUA_NHO' && !memory);
    const dk3 = (this.filterForm==='XEM_DA_NHO'&& memory);
    return dk1||dk2||dk3;
  }
}
