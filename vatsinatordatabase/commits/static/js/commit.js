/**
 * Dynamic commit support
 */
var commit = {

    commit: function () {
        $("#commitDialog").dialog("open");

        var token = $("#commitToken").val();

        $.ajax({
            url: "/commits/accept/",
            type: "post",
            data: {
                token: token
            },

            success: function (data) {
                if (data.result == 1) {
                    var url = data.url;
                    window.location.replace(url);
                }
            }
        });
    },

    reject: function () {
        $("#rejectDialog").dialog("open");

        var token = $("#commitToken").val();

        $.ajax({
            url: "/commits/reject/",
            type: "post",
            data: {
                token: token
            },

            success: function (data) {
                if (data.result == 1) {
                    var url = data.url;
                    window.location.replace(url);
                }
            }
        });
    },

    init: function () {
        $("#commitAccept").click(function () {
            commit.commit();
        });

        $("#commitReject").click(function () {
            commit.reject();
        });
    }

};

$(document).ready(function () {
    commit.init();
});