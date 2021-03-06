
$(document).ready(function() {

  var url = config.ip;

  // edit tables=======================
  var apiUrl = url + $('#api').text() + '/';

  var auth = ['員工', '主管'];
  var status = ['上架', '下架'];
  var statusO = ['準備中', '已出貨', '已送達', '結案'];

  $('html, body').on('click', '.edit', function(){

    // icon edit/save
    var icoEdit = '<span aria-hidden="true" class="glyphicon glyphicon-pencil"></span>';
    var icoSave = '<span aria-hidden="true" class="glyphicon glyphicon-floppy-open"></span>';

    // get info we need
    var id = $(this).attr('data-orderId');
    var onEdit = parseInt( $(this).attr('data-onEdit') );
    var arr = $('[data-orderId="' + id + '"] td[data-ctrl]');

    var reload = setTimeout( function(){
      console.log('reload img');
      var $img = $('[data-orderId="' + id + '"] img');
      $img.attr( 'src', $img.attr('src') );
    }, 3000);

    // going to save
    if( onEdit === 1 ){

      $('input[type="submit"]').click();

      // chage btn icon
      $(this).empty().append(icoEdit);

      var data = {};

      data._id = id;


      // loop to read each <td>
      for (var i = 0; i < arr.length; i++) {
        var show = controlsValue( $(arr[i]).attr('data-ctrl'), arr[i] ); //use data-ctrl to get vaule
        data[ $(arr[i]).attr('data-schema') ] = show;                      //use data-shema to set json
        if(show) $(arr[i]).empty().append( show );
        // if(show) $(arr[i]).html( show );
      };


      // ajax save api
      console.log('data', data);

      $.ajax({

        type: 'PUT',
        url: apiUrl,
        data: data,

        success: function( result ){
          console.log('資料更新成功', result);
        },

        error: function( err ){
          console.log('新增資料失敗', err);
        }

      });

    // going to edit
    }else{
      // change btn icon
      $(this).empty().append(icoSave);

      // loop to read each <td>
      for (var i = 0; i < arr.length; i++) {
        var ctrl = controls($(arr[i]).attr('data-ctrl'), $(arr[i]).html());
        if(ctrl) $(arr[i]).empty().append( ctrl );
      };

      //init date picker
      // initDatePicker();
    }

    //  true false switch
    onEdit -= 1;
    onEdit = onEdit * onEdit;
    $(this).attr('data-onEdit', onEdit);

    return false;
  });

  function controls( ctrl, value ){

    var show;

    value = value.replace(/ /g, '');

    switch(ctrl){

      case 'none':
        show = value;
        break;

      case 'auth':
        show = buildSelector( auth, value );
        break;

      case 'status':
        show = buildSelector( status, value );
        break;

      case 'statusO':
        show = buildSelector( statusO, value );
        break;

      case 'num':
        show = '<input type="number" class="form-control"  value="' + value + '" >';
        break;

      case 'text':
        show = '<input class="form-control" type="text" value="' + value + '"></input>';
        break;

      case 'textarea':
        show = '<textarea rows="4" cols="50" class="form-control">'+value+'</textarea>';
        break;

      case 'img':
        show = '<form id="uploadForm" enctype="multipart/form-data" action="' + url + 'img/new" method="post"> <input type="file" name="userPhoto"/> <input type="submit" value="重新上傳" name="submit" class="btn btn-success btn-xs "/> </form>';
        break;
    }
    return show;
  }

  function controlsValue( ctrl, obj ){

    var show;

    switch(ctrl){

      case 'none':
        show =  $(obj).text();
        break;

      case 'auth':
        show = $(obj).children('select').val();
        break;

      case 'status':
        show = $(obj).children('select').val();
        break;

      case 'statusO':
        show = $(obj).children('select').val();
        break;

      case 'num':
        show = $(obj).children('input').val();
        break;

      case 'text':
        show = $(obj).children('input').val();
        break;

      case 'textarea':
        show = $(obj).children('textarea').val();
        break;

      case 'img':
        var imgPath = $(obj).children('form').children('input').val();

        if(imgPath == ''){
          imgPath = $(obj).attr('data-url');
        }
        imgPath = imgPath.toString().substring( 1 + imgPath.lastIndexOf('\\'), imgPath.length );
        imgPath = 'uploads\\' + imgPath;
        show = '<img src="' + imgPath + '">';
        break;
    }

    show = show || ' ';
    return show;
  }

  //build <select>
  function buildSelector( arr, selected ){

    var select = '<select class="form-control">';
    var option = '<option value="@val">@val</option>';
    var optionChecked = '<option value="@val" selected>@val</option>';
    var selectEnd = '</select>';
    var tmp = '';

    for (var i = 0; i < arr.length; i++) {
      if( arr[i] !== selected )
        tmp += option.replace( /@val/g, arr[i] );
      else
        tmp += optionChecked.replace( /@val/g, arr[i] );

    };

    return select + tmp + selectEnd;
  }

  // end edit table
  // ===========================


  // on add
  $('html, body').on('click', '#add', function(){

    var id = '', row = '';
    // var id = $('table#main tbody tr').length + 1;
    var arr = $('table#main tbody tr:first-child td');
    // var row = '<tr data-orderid="' + id +'">';



    // create
    $.ajax({

      type: 'POST',
      url: apiUrl,

      success: function( result ){
        id = result._id;
        row = '<tr data-orderid="' + id +'">';
        todo();
        console.log('新增資料成功', result);
      },

      error: function( err ){

        console.log('新增資料失敗', err);
      }

    });

    function todo(){

      for (var i = 0; i < arr.length ; i++) {

        if( i == arr.length - 1){

          row += '<td><button id="preDelete" data-orderId="@id" class="btn btn-danger ctrl-table"><span aria-hidden="true" class="glyphicon glyphicon-trash"></span></button><button data-orderid="@id" data-onedit="0" class="btn btn-warning ctrl-table edit"><span aria-hidden="true" class="glyphicon glyphicon-pencil"></span></button></td></tr>'.replace(/@id/g, id);
          break;
        }

        var td = '<td @attr @schema></td>';
        var ctrl = $(arr[i]).attr('data-ctrl');

        if(ctrl) td = td.replace(/@attr/g, 'data-ctrl="' + ctrl + '"');
        else td = td.replace(/@attr/g,'');

        var schema = $(arr[i]).attr('data-schema');
        if(schema) td = td.replace(/@schema/g, 'data-schema="' + schema + '"');
        else td = td.replace(/@schema/g,'');


        row += td;
      };

      $('table#main tbody').append(row);
      var index = $('.edit').length - 1;
      $( $('.edit')[index] ).click();

    }
    return false;
  });

  var target = '';

  $('html, body').on('click', '#preDelete', function(){
    target = $(this).attr('data-orderId');
    //確保 del dialog
    $('#delDialog').modal({});
  });

  // 刪除資料
  $('html, body').on('click', '#delete', function(){

    console.log('target', target);

    $.ajax({

      type: 'DELETE',
      url: apiUrl,
      data: { _id: target },
      success: function( result ){
        $('tr[data-orderId="' + target + '"]').remove();
        $('#delDialog').modal('toggle');
        // console.log('刪除資料成功', result);
      },

      error: function( err ){
        console.log('刪除資料失敗', err);
      }

    });

    return false;
  });
});//  end doc reade
