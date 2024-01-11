fetch('http:192.168.1.65:8000/get_html', {
  method: 'POST',
  body: {
    link: 'https://alexandrinsky.ru/afisha-i-bilety/?afisha_open_widget=1',
  },
});
