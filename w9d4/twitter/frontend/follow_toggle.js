class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.user_id = this.$el.data('user_id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick())
    }

    render(){
        if (this.followState){
            this.$el.html('Unfollow');
        }else{
            this.$el.html('Follow');
        }
    }

    handleClick(e){
        e.preventDefault
        if(this.followState){
            this.followState = false;
            $.ajax({
                method: 'DELETE',
                url: '/users/:user_id/follow',
                data: this.followState,
                dataType: 'JSON'
            })
        }else{
            this.followState = true;
            $.ajax({
                method: 'POST',
                url: '/users/:user_id/follow',
                data: this.followState,
                dataType: 'JSON'
            })
        }
    }
}

module.exports = FollowToggle;