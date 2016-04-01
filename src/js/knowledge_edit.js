var list=[
    {id:1, user:'toffy1', provider:'car shop', createTime:'2016-03-30 16:08:00'},
    {id:2, user:'toffy2', provider:'car shop', createTime:'2016-03-30 16:08:00'},
    {id:3, user:'toffy3', provider:'car shop', createTime:'2016-03-30 16:08:00'}
];

$('#wrapper').html(template('template', {
    title:'实用保养技巧',
    author:'车主',
    content:'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.'
}));


$(document)
    //驳回
    .on('click', '#reject', function(){
        $('#modalReject').html(template('tempReject', {}))
            .modal('show');
    })
;