import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import { Content1 } from './Content1';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Content1"
				component={Content1}
				durationInFrames={240}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
