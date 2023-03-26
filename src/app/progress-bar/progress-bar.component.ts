import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string | undefined;
  @Input() progressColor: string | undefined;
  @Input() progress: any = undefined;
  constructor() {
    // lúc này this.progress = 0
    console.log('constructor-progress', this.progress);
  }
  ngOnInit(): void {
    // lúc này this.progress = 15 , giá trị truyền xuồng từ parrent
    console.log('init-progress', this.progress);
  }

  /* các biến truyền bằng input khi truyền xuống ở progress vẫn chưa nhận giá trị mà vẫn là giá trị khởi tạo
    biến input được gán giá trị từ cha khi bắt đầu render component ở onInit

    - thứ tự :
    1,constructor - chỉ đc gen 1 lần
    2,ngOnChanges
    3,ngOninit - chỉ gen khi tạo lại component
    */

  ngOnChanges(changes: SimpleChanges) {
    if ('progress' in changes) {
      console.log('ngOnChanges before checkProgress', this.progress);
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 50;
        } else {
          this.progress = progress;
        }
      }
      console.log('ngOnChanges after checkProgress', this.progress);
    }
  }
}
