var list=[
    {id:1, title:'car shop', content:'惠风三路', time:'2016-04-01'},
    {id:2, title:'car shop', content:'惠风三路', time:'2016-04-01'},
    {id:3, title:'car shop', content:'惠风三路', time:'2016-04-01'}
];

$('#widget').html(template('tempWidget', {list:list}));