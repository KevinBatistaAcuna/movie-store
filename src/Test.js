import React from 'react';
import { Button } from 'reactstrap';

function Test(props){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>This is a test</h1>
                </div>
                <div class="col-md-4 text-center">
                    <Button color="danger">Test1</Button>
                </div>
                <div class="col-md-4 text-center">
                    <Button color="danger">Test2</Button>
                </div>
                <div class="col-md-4 text-center">
                    <Button color="danger">Test3</Button>
                </div>
            </div>
        </div>
    )
}

export default Test;