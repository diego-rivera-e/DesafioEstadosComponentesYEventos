import Button from 'react-bootstrap/Button';
const Btn = (props) =>{
    const { text } = props;
    return (
        <Button variant="primary" type="submit">
        {text}
        </Button>
        );
};

export default Btn;