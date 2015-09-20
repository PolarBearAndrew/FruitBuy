$(document).ready(function() {
    $('#uploadForm').submit(function() {

        console.log('upload');

        $(this).ajaxSubmit({
            error: function(xhr) {
                status('Error: ' + xhr.status);
                return false;
            },
            success: function(response) {
                console.log(response);
                // $('#show').attr('src', response.path)
                return false;
            }
        });
        return false;
    });
});
