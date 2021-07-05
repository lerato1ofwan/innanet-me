import styles from '../styles/BlogPost.module.scss';

export const Qoute = props => {
    return (
        <div className={styles.quote}>
            {!Array.isArray(props.children.props.children) ? 
                <p>
                    {props.children.props.children}
                </p> :
                <div>
                    <p>
                        {props.children.props.children[0]}
                    </p>
                    <a target="_blank" href={props.children.props.children[1].props.href} rel="noopener noreferrer">
                        {props.children.props.children[1].props.children}
                    </a>
                </div>
            }
        </div>
    )
};

export const LinkTag = props => {
    return (
        <a target="_blank" href={props.href} rel="noopener noreferrer">{props.children}</a>
    );
};