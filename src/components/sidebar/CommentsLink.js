import React from 'react'
import TwitterImg from '../../icon/twitter-icon.png';

const CommentsLink = () => {
    return (
        <div className="comments">
            <h4>Latest From Twitter</h4>
            <ul>
				<li>
					<span className="icon"><img src={TwitterImg} alt="twitter"/></span>
					<span className="contact">@crucio</span>
					<span className="comment">what an incredible site!</span><br/>
					<span className="time">less than a minute ago</span>
				</li>
				<li>
					<span className="icon"><img src={TwitterImg} alt="twitter"/></span>
					<span className="contact">@lukebeck</span>
					<span className="comment">love this theme, tons of options, lots of goodies and crazy good support.  I cant ask for anything better!</span><br/>
					<span className="time">about 3 hours ago</span>
				</li>
				<li>
					<span className="icon"><img src={TwitterImg} alt="twitter"/></span>
					<span className="contact">@harikumar</span>
					<span className="comment">where do you get support for account issues?</span><br/>
					<span className="time">less than a minute ago</span>
				</li>
			</ul>
            <div className="good-comments">
				<h4>Our Happy Clients</h4>
				<p className="comment-text">“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consec tetur, adipisci velit, sed quia non numquam eius labore et dolore magnam ets aliquam quaerat voluptatemser. Enim ad minimas venians amets</p>
			</div>
        
        </div>
    )
}

export default CommentsLink
