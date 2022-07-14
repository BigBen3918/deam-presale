
const Loading = ({width = 100, height=100, color="#eee", opacity=0.5, show=false}) => {
	return (
        <div style={{position:"fixed", left:0, top:0, width:'100%', height:'100%', backgroundColor:'rgba(0,0,0, '+opacity+")", zIndex:11111}} hidden={!show}>
            <div style={{position:'absolute', top:'calc(50vh - '+height/2+'px)', left:'calc(50vw - '+width/2+'px)'}}>
                <div className="loading" style={{ width, height, color }}>
                    <div style={{ width, height }}></div>
                    <div style={{ width, height }}></div>
                    <div style={{ width, height }}></div>
                    <div style={{ width, height }}></div>
                </div>
            </div>
        </div>
	)
}
export default Loading