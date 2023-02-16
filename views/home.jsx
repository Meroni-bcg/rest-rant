
const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className='img-container'>
                    <img src='https://www.mylatinatable.com/wp-content/uploads/2016/05/enchiladas-rojas-5-1024x642-1.jpg' alt='enchiladas rojas' width="500" />
                    <div className='attribution'>
                        Photo found on <a href='https://www.mylatinatable.com/wp-content/uploads/2016/05/enchiladas-rojas-5-1024x642-1.jpg'>MyLatinatable</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home