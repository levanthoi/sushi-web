
jQuery(document).on('change', '#Users_province_id', function () {
    jQuery.ajax({
        url: '/suggest/suggest/getdistrict',
        data: 'pid=' + jQuery('#Users_province_id').val(),
        dataType: 'JSON',
        beforeSend: function () {
            w3ShowLoading(jQuery('#Users_province_id'), 'right', 20, 0);
        },
        success: function (res) {
            if (res.code == 200) {
                jQuery('#Users_district_id').html(res.html);
            }
            w3HideLoading();
        },
        error: function () {
            w3HideLoading();
        }
    });
});
