import React, {Component} from 'react';
import "./home.css"
import {GridList, GridTile} from 'material-ui/GridList';

//사용해야할 컴포넌트 grid-list

const varietyShowCategories = [
    {
        title: "카테고리 1",
        items : [
            {
                title : "예능 1"
            },
            {
                title : "예능 2"
            },
            {
                title : "예능 3"
            },
            {
                title : "예능 4"
            },
            {
                title : "예능 5"
            },
            {
                title : "예능 6"
            },
            {
                title : "예능 7"
            },
            {
                title : "예능 8"
            }
        ]
    },
    {
        title: "카테고리 2",
        items : [
            {
                title : "예능 1"
            },
            {
                title : "예능 2"
            },
            {
                title : "예능 3"
            },
            {
                title : "예능 4"
            },
            {
                title : "예능 5"
            },
            {
                title : "예능 6"
            },
            {
                title : "예능 7"
            },
            {
                title : "예능 8"
            }
        ]
    }
];

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visibleEpiBlockFlags: []
        };
    }

    componentDidMount() {
        this.setState({'visibleEpiBlockFlags': varietyShowCategories.map(()=> false)});
        console.log(this.state.visibleEpiBlockFlags);
    }

    onClickVarietyShowElement = (cate_idx, show_idx) => {
        return () => {
            let visibleEpiBlockFlags = this.state.visibleEpiBlockFlags;
            visibleEpiBlockFlags[cate_idx] = true;
            this.setState({'visibleEpiBlockFlags': visibleEpiBlockFlags});
            console.log(cate_idx, show_idx, this.state.visibleEpiBlockFlags)
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main-billboard">
                    메인 빌보드
                </div>
                <div className="category-wrapper">
                    {varietyShowCategories.map((cate, idx) =>
                        <div style={styles.root}>
                            <h3>{cate.title}</h3>
                            <GridList cellHeight={280} cols={2.2} key={idx}
                                      style={styles.gridList}>
                                {cate.items.map((show, show_idx) =>
                                    <GridTile key={show_idx} title={show.title} onClick={this.onClickVarietyShowElement(idx, show_idx)}>
                                        <img src="/test_images/sinseoyugi.jpg" alt=""/>
                                    </GridTile>
                                )}
                            </GridList>
                            {this.state.visibleEpiBlockFlags[idx] ? <div>hide</div> : ''}
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Home;
