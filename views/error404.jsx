const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <h1>404: Page Not Found</h1>
            <p>Oopsy! Seems like somethin went wrong ...</p>
            <div style={{ position: 'relative' }}>
                <img src="Public/sorrysmile.jpeg" alt="sad smiley" width="300" />
                <div className='attribution'>
                    Photo found on <a href='http://www.femalefirst.co.uk/image-library/square/500/e/excuse-me-5079442640.jpg'></a>
                </div>
            </div>
            <a href='/'>Return to home page</a>
        </Def>
    )
}

module.exports = Error404
  