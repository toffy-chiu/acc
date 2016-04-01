var list=[
    {id:1, name:'toffy1', desc:'car shop', submitTime:'惠风三路', status:'待审核'},
    {id:2, name:'toffy2', desc:'car shop', submitTime:'惠风三路', status:'已审核'},
    {id:3, name:'toffy3', desc:'car shop', submitTime:'惠风三路', status:'已驳回'}
];

$('#widget').html(template('tempWidget', {list:list}));