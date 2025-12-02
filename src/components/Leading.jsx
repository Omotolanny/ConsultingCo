function Leading () {
    return (
        <section className="leading-market" id="about">
            <div className="leading-content">
                <h1 className="leading-title">WE'RE LEADING IN THE MARKET</h1>
                <p className="leading-description">The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," written in 45 BC.</p>
               <p className="leading-highlight">We have 35+ years of experience, We offer marketing and consulting services</p>
                <div className="progress-section">
                    <div className="progress-item">
                        <div className="progress-header">
                            <span>Marketing</span>
                            <span>90%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span>Advices</span>
                            <span>80%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '80%'}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span>Consulting</span>
                            <span>85%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '85%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Leading;