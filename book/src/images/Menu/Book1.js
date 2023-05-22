import bookImage from './../Atomic-Habits.jpg';

function Book1() {
  return (
  <div className="book-container">
        <img className="bool-cover" src={bookImage}/>
        <div className="book-info">

            <div>
                <h1>Atomic Habits</h1>
                <p className="author">Author </p>
                <p className="real-author">James Clear</p>
                <p className="price">Price </p>
                <p className="real-price">45 dh</p>
                <p className="language">Language </p>
                <p className="real-language">English</p>
                <p className="summary">Summary </p>

                <p>Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get
                    1%
                    better
                    every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers
                    a
                    simple set
                    of rules for creating good habits and breaking bad ones. Read the full summary to glean 3 key
                    lessons
                    from
                    Atomic Habits, learn how to build a habit in 4 simple steps, and get a handy reference guide for the
                    strategies
                    recommended throughout the book.</p>

                <p className="review">Reviews </p>

                <div className="rating">
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                </div>
                <p className="reviewer">Samuel Hare</p>
                <p>If you have not read a book on forming habits before, read this book. If you have, Atomic Habits will
                    probably have some practical tips but you might not find anything ground-breaking in it. </p>
                
                    <div className="rating">
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                    <span>&#x2605;</span>
                </div>
                <p className="reviewer">SANA JAMAL</p>
                <p>Now onwards, if someone asks me what’s my favorite self help book, I know the answer: Atomic Habits
                    by James Clear.
                    Here are a few quotes I loveddd from the book. A very, very practical approach to organizing your
                    life. Recommended</p>
                    
                    <div className="rating">
                        <span>&#x2605;</span>

                    </div>
                    <p className="reviewer">David Carter</p>
                    <p>,Doesn't say anything I haven't heard before.
                        James Clear needs to specify more clearly why we should listen to him... what are his actual qualifications? I'd much prefer to read a book by multiple psychologists and psychiatrists rather than from one seemingly random guy. </p>

            </div>
        </div>
        </div>
  );
}

export default Book1;
