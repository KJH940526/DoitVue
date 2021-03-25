// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another global child component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
Vue.component('todo-footer', {
	template: '<p>This is another global child component</p>'
});

// 컴포넌트 내용 설정
var cmp = {
	template: '<p>This is another local child component</p>'
};

var app = new Vue({
    el: '#app', //el 태그로 영역설정
    data: {
      message : 'This is a parent component'
    },
  
    // 실습 #2 - `todo-list` 컴포넌트 지역 등록
    // <p>This is another local child component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
      components: {
          'todo-list': cmp
      }   //컴포넌트 이름 : 컴포넌트 내용
  });
