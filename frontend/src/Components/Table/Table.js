import React from 'react';
import {Table} from 'react-bootstrap'

const TableL = () => {
    return (
        <div>
            <Table bordered responsive="md" size="sm">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Biology</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Chemistry</td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Physics</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>English</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>General Knowledge
                                            <ul>
                                                <li>History and Culture of Bangladesh - 6</li>
                                                <li>International affairs - 4</li>
                                            </ul>
                                        </td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Total mark</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Total time</td>
                                        <td>1 hour</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Negative mark for one wrong ans</td>
                                        <td>0.25</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Pass mark</td>
                                        <td>40</td>
                                    </tr>
                                </tbody>
                            </Table>
        </div>
    );
};

export default TableL;