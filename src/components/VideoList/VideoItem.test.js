import { fireEvent, render, waitFor } from "@testing-library/react";

import VideoItem from "./VideoItem";

const mockVideo = {
  snippet: {
    thumbnails: {
      medium: {
        url: "video thumbnail url",
      },
    },
    title: "video snippet title",
  },
};

const mockVideoSelect = jest.fn();

describe("Video Item", () => {
  it("should call onVideoSelect onClick", async () => {
    const { getByTestId } = render(<VideoItem video={mockVideo} onVideoSelect={mockVideoSelect} />);
    expect(getByTestId("video_item").textContent).toContain(mockVideo.snippet.title);
    fireEvent.click(getByTestId("video_item"));
    await waitFor(() => {
      expect(mockVideoSelect).toHaveBeenCalledTimes(1);
    });
  });
});
