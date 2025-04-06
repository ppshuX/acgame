class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";
    }

    start() {
        this.getinfo();
    }

    register() {

    }

    login() {

    }

    getinfo() {
        let outer = this;

        $.ajax({
            url: "https://app7454.acapp.acwing.com.cn/settings/getinfo/",
            type: "GET",
            data: {
                platform: outer.platform,
            },
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }

    hide() {

    }

    show() {

    }
}
