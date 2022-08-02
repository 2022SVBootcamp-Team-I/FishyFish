#import torch
"""
def fish_detect(img_link):
    #torch.hub._validate_not_a_forked_repo = lambda a, b, c: True
    # Model
    model = torch.hub.load('ultralytics/yolov5', 'custom', 'inference/last.pt')  # custom trained model
    model.conf = 0.10
    # Images
    im = img_link  # or file, Path, URL, PIL, OpenCV, numpy, list

    # Inference
    results = model(im)
    results.show()

    # Results
    fish = results.pandas().xyxy[0].values.tolist()
    fish_ac = fish[0][-1]

    fish_dict = {"hali":"광어", "mack":"고등어", "rock":"우럭", "ray":"노랑가오리", "snap":"참돔",}
    i = fish_dict[fish_ac]
    return i
"""
def addition(x,y):
    return x+y
