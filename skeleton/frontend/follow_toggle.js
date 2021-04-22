class FollowToggle {
    constructor(el) {
        const $el = $(el);
        this.$el = $el;
        this.userId = $el.attr("data-user-id");
        this.followState = $el.attr("data-initial-follow-state");
        this.render();
        // this.handleClick();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.html("Follow!");
        } else {
            this.$el.html("Unfollow!");
        }
    }
    
    handleClick() {
        debugger
        if (this.followState === "unfollowed") {
            return $.ajax({
                method: "POST",
                url: "/users/:id/follow",
                success: response => {
                    this.followState = 'followed';
                    this.render();
                },

            }) 
        } else {
            return $.ajax({
                method: "DELETE",
                url: "/users/:id/follow",
                success: response => {
                    this.followState = 'unfollowed';
                    this.render();
                },
            })
        }
    }

}

module.exports = FollowToggle;