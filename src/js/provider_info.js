var list=[
    {id:1, name:'toffy1', desc:'car shop', addr:'惠风三路', phone:'1234567890'},
    {id:2, name:'toffy2', desc:'car shop', addr:'惠风三路', phone:'1234567890'},
    {id:3, name:'toffy3', desc:'car shop', addr:'惠风三路', phone:'1234567890'}
];

$('#widget').html(template('tempWidget', {list:list}));