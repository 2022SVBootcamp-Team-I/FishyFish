import torch
  

def fish_detect(img_link):
    torch.hub._validate_not_a_forked_repo = lambda a, b, c: True
    # Model
    model = torch.hub.load('ultralytics/yolov5', 'custom', '/backend/images/inference/last.pt', _verbose=False, force_reload=True)  # custom trained model
    model.conf = 0.10
    # Images
    im = img_link  # or file, Path, URL, PIL, OpenCV, numpy, list
    results = model(im)

    # Results
    fish = results.pandas().xyxy[0].values.tolist()
    fish_ac = fish[0][-1]

    fish_dict = {"mack":1, "rock":2, "ray":3, "snap":4, "hali":5}
    i = fish_dict[fish_ac]
    return i
