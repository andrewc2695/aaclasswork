class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.user_id = this.$el.data('user_id');
        this.followState = this.$el.data('initial - follow - state');
        this.render();
    }

    render(){
        if (this.followState){
            this.$el.html('Unfollow');
        }else{
            this.$el.html('Follow');
        }
    }
}

module.exports = FollowToggle;