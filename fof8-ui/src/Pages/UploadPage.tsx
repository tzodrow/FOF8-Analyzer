import { FontIcon, mergeStyles, mergeStyleSets, PrimaryButton, Stack, StackItem } from '@fluentui/react';
import axios from 'axios';
import { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPlayer } from '../Models/IPlayer';
import { useAppSelector } from '../Reducers/Hooks';
import { update } from '../Reducers/Slices/PlayersSlice';

enum FileStatus {
    Fail,
    Pending,
    Success
}

function onFileUpload(file: File | null | undefined, functionName: string, setStatus: (status: FileStatus) => void, dispatch: Dispatch<any>) {
    axios
        .post(`http://localhost:7071/api/${functionName}`, file)
        .then(res => {
            let newPlayers: Array<IPlayer> = res.data;
            dispatch(update(newPlayers));
            setStatus(FileStatus.Success);
        })
        .catch(err => {
            console.error(err);
            setStatus(FileStatus.Fail);
        });
}

function onSave(players: Array<IPlayer>) {
    axios
    .post(`http://localhost:7071/api/SavePlayerData`, players)
    .then(res => {
        let result = res.data;
        console.log(`Data saved: ${result}.`);
    })
    .catch(err => {
        console.error(err);
    });
}

const iconClass = mergeStyles({
    fontSize: 15,
    height: 15,
    width: 15,
    margin: '0 25px',
});

const classNames = mergeStyleSets({
    green: [{ color: 'green' }, iconClass],
    red: [{ color: 'red' }, iconClass],
    black: [{ color: 'black' }, iconClass]
});

type StatusIconProps = {
    status: FileStatus;
}

function StatusIcon(props: StatusIconProps) {
    
    let iconClass = "";
    let className = classNames.black;
    switch (props.status) {
        case FileStatus.Fail:
            iconClass = 'Cancel';
            className = classNames.red;
            break;
        case FileStatus.Success:
            iconClass = 'CheckMark';
            className = classNames.green;
            break;
        case FileStatus.Pending:
        default:
            iconClass = 'Add';
            className = classNames.black;
            break;
    }
    
    return (
        <FontIcon iconName={iconClass} className={className} />
    );
}

export interface IUploadPageProps {
}

export function UploadPage(props: IUploadPageProps) {
    const [playerInformationStatus, setPlayerInformationStatus] = useState(FileStatus.Pending);
    const [playerRecordStatus, setPlayerRecordStatus] = useState(FileStatus.Pending);
    const [rookieStatus, setRookieStatus] = useState(FileStatus.Pending);
    const [draftPersonalStatus, setDraftPersonalStatus] = useState(FileStatus.Pending);

    const players = useAppSelector(state => state.players.players);
    const dispatch = useDispatch();

    return (
        <Stack>
            <StackItem>
                <StatusIcon status={playerInformationStatus} />
                <span>Player Information: </span>
                <input type="file" onChange={(e) => onFileUpload(e.target.files?.item(0), "ParsePlayerInformation", setPlayerInformationStatus, dispatch)} />
            </StackItem>
            <StackItem>
                <StatusIcon status={playerRecordStatus} />
                <span>Player Record: </span>
                <input type="file" onChange={(e) => onFileUpload(e.target.files?.item(0), "ParsePlayerRecord", setPlayerRecordStatus, dispatch)} />
            </StackItem>
            <StackItem>
                <StatusIcon status={rookieStatus} />
                <span>Rookie: </span>
                <input type="file" onChange={(e) => onFileUpload(e.target.files?.item(0), "ParseRookie", setRookieStatus, dispatch)} />
            </StackItem>
            <StackItem>
                <StatusIcon status={draftPersonalStatus} />
                <span>Draft Personal: </span>
                <input type="file" onChange={(e) => onFileUpload(e.target.files?.item(0), "ParseDraftPersonal", setDraftPersonalStatus, dispatch)} />
            </StackItem>
            <StackItem>
                <PrimaryButton text={"Save Data"} onClick={() => onSave(players)} />
            </StackItem>
        </Stack>
    );
}