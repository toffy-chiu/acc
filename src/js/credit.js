var list=[
    {id:1, name:'toffy1', sex:'男', city:'惠州市', phone:'1234567890', credit:100},
    {id:2, name:'toffy2', sex:'男', city:'惠州市', phone:'1234567890', credit:100},
    {id:3, name:'toffy3', sex:'男', city:'惠州市', phone:'1234567890', credit:100}
];

$('#widget').html(template('tempWidget', {list:list}));